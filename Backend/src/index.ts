import express from "express";
import "dotenv/config";
import { AdminRouter, ApplicantRouter, AuthRouter, HrRouter } from "./routes";

const app = express();

app.use(express.json());

app.use("v1/api/admin", AdminRouter);

app.use("v1/api/applicant", ApplicantRouter);

app.use("v1/api/hr", HrRouter);

app.use("v1/api/auth", AuthRouter);

export default app;
