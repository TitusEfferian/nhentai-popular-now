/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const fetch = require('isomorphic-unfetch');
const nhentaiPopular = process.env.NHENTAI_POPULAR.toString();

exports.popularNow = async (req, res) => {
  try {
    const resultPopularToday = await fetch(nhentaiPopular);

    const { result } = await resultPopularToday.json();

    res.send({
      success: true,
      result,
    })
  } catch (err) {
    res.send({
      success: false,
      message: JSON.stringify(err),
    })
  }
};
