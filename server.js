const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Hello from my CI/CD project! 🚀</h1>
        <p>This application is deployed automatically.</p>
    `);
});

server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});