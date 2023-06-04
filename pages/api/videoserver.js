import axios from "axios";

export const config = {
  api: {
    bodyParser: true,
  },
};
const localURL = process.env.URL;
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(localURL, req.body);
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  }
}