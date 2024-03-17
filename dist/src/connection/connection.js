"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const product_1 = require("../models/product");
const category_1 = require("../models/category");
const connection = new sequelize_typescript_1.Sequelize({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: 'postgres', //'sisweb_user',
    password: 'Lokomiko.00', //'HDK#$%Ljkwerff.89',
    storage: ':memory:',
    models: [product_1.Product, category_1.Category]
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.sync({ alter: true });
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.default = connectionDB;
