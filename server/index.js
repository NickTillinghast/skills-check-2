const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
