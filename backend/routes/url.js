const express = require('express');
const { nanoid } = require('nanoid');
const Url = require('../models/url');

const router = express.Router();

router.post('/api/shorten', async (req, res) => {
    const { original_url } = req.body;
    const base_url = process.env.BASE_URL;

    if (!original_url) {
        return res.status(400).json({ error: 'Original URL is required' });
    }

    try {
        let url = await Url.findOne({ original_url });

        if (url) {
            return res.json({ short_url: `${base_url}/${url.short_code}` });
        }

        const short_code = nanoid(7);
        url = new Url({
            original_url,
            short_code,
        });

        await url.save();
        res.json({ short_url: `${base_url}/${url.short_code}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/:shortcode', async (req, res) => {
    try {
        const url = await Url.findOne({ short_code: req.params.shortcode });

        if (!url) {
            return res.status(404).json({ error: 'URL not found' });
        }

        url.visit_count++;
        await url.save();

        res.redirect(url.original_url);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/api/admin/urls', async (req, res) => {
    try {
        const urls = await Url.find().sort({ createdAt: -1 });
        res.json(urls);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
