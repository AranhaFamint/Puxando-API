import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;
const BASE_URL = 'https://pokeapi.co/api/v2/';


app.use(express.json());


app.get('/api/pokemons', async (req, res) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon?limit=150`);
        const data = await response.json();
        res.json(data.results);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os Pokemons' });
    }
});


app.get('/api/pokemons/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await fetch(`${BASE_URL}pokemon/${name}`);
        if (!response.ok) {
            return res.status(404).json({ error: 'Pokémon não encontrado' });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o Pokémon' });
    }
});


app.get('/api/types', async (req, res) => {
    try {
        const response = await fetch(`${BASE_URL}type`);
        const data = await response.json();
        res.json(data.results);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os tipos de Pokémon' });
    }
});


app.get('/api/colors', async (req, res) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon-color`);
        const data = await response.json();
        res.json(data.results);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as cores dos Pokémons' });
    }
});


app.put('/api/pokemons', (req, res) => res.json({ message: 'Este método ainda não está implementado' }));
app.post('/api/pokemons', (req, res) => res.json({ message: 'Este método ainda não está implementado' }));
app.delete('/api/pokemons/:name', (req, res) => res.json({ message: 'Este método ainda não está implementado' }));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});