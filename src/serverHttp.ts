import cors from "cors";
import "dotenv/config";
import http from "http";
import { Server } from "socket.io";
import path from 'path';
import express from 'express'


const app = express();
app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.resolve( './uploads')));

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export { serverHttp, io };