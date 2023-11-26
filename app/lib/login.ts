// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { username, password } = { username: 'admin', password: 'admin' };
      const url = 'https://aptrsapi.souravkalal.tech/api/auth/login/';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      res.status(response.status).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
