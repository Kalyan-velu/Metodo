import { AuthMiddleWare } from './../middleware/AuthMiddleWare';
import { User } from './../controller/User.controller';
import express from "express";

const router=express.Router()

router.get("/",AuthMiddleWare,User)

export default router