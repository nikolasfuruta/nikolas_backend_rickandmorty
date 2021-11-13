const PersonagensRepository = require('../repository/PersonagensRepository.js');
const Validate = require('../validations/Validate');

class PersonagensControllers {

    static async readAll(req,res){
        try{
            const result = await PersonagensRepository.readAll();
            res.status(200).json(result);
        }catch(err){
            console.error(err.message);
            res.status(400).json({message:"ERRO NO READALL"});
        }
    }

    static async readSingle(req,res){
        if(!Validate.validarId(req.params.id)){
            return res.status(400).json({message:"PARÂMETRO INCORRETO"});
        }
        try{
            const result = await PersonagensRepository.readSingle(req.params.id);
            return res.status(200).json(result);
        }catch(err){
            console.error(err.message);
            return res.status(400).json({message:"ERRO NO READSINGLE"});
        }
    }

    static async create(req,res){
        if(!Validate.validarInfo(req.body)){
            return res.status(400).json({message:"INFORMAÇÃO DE CADASTRO INCORRETO"});
        }
        try{
            const result = await PersonagensRepository.create(req.body);
            return res.status(200).json(result);
        }catch(err){
            console.error(err.message);
            return res.status(400).json({message:"ERRO NO CREATE"});
        }
    }

    static async delete(req,res){
        if(!Validate.validarId(req.params.id)){
            return res.status(400).json({message:"PARÂMETRO INCORRETO"});
        }
        try{
            const result = await PersonagensRepository.delete(req.params.id);
            return res.status(200).json(result);
        }catch(err){
            console.error(err.message);
            return res.status(400).json({message:"ERRO NO DELETE"});
        }
    }

    static async update(req,res){
        if(!Validate.validarId(req.params.id)){
            return res.status(400).json({message:"PARÂMETRO INCORRETO"});
        }
        if(!Validate.validarInfo(req.body)){
            return res.status(400).json({message:"INFORMAÇÃO DE CADASTRO INCORRETO"});
        }

        try{
            const result = await PersonagensRepository.update(req.params.id,req.body);
            return res.status(200).json(result);
        }catch(err){
            console.error(err.message);
            return res.status(400).json({message:"ERRO NO UPDATE"});
        }
    }
}

module.exports = PersonagensControllers;