const axios = require('axios');

exports.getNews = async (req, res) => {
  const { query, page } = req.query;
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${query}&token=${process.env.GNEWS_API_KEY}&page=${page}&lang=en`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
