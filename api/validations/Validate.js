class Validate {

    static async validarId(id){
        if(id.length != 24){
            return false
        }
        return true
    }

    static async validarInfo(info){
        if(!info.nome||!info.imagemUrl){
            return false
        }
        return true
    }
}

module.exports = Validate;