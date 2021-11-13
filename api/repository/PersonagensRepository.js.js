const Personagens = require('../models/personagemSchema')

class PersonagensRepository {

    static async readAll(){
        return await Personagens.find({})
    }

    static async readSingle(id){
        return await Personagens.findOne({_id:id})
    }

    static async create(info){
        return await Personagens.create(info)
    }

    static async delete(id){
        return await Personagens.findOneAndDelete({_id:id})
    }

    static async update(id, info){
        const result = await Personagens.findOneAndUpdate({_id:id},info)
        if(result){
            return {message:"ALTERADO"}
        }
        return {message:"NÃO ALTERADO"}
    }
}

module.exports = PersonagensRepository;