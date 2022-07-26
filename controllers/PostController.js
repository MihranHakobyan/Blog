const PostService = require('../services/PostService');
const httpStatusCodes = require('../libs/constants/http-Status-Codes');

class PostController {
    static async getAllPosts(req, res) {
        try {
            const posts = await PostService.getAllPosts();
            res.status(httpStatusCodes.OK).send(posts);
        } catch (err) {
            res.status(httpStatusCodes.SERVER_ERROR).send(err.message);
        }
    }

    static async addPost(req, res,next) {
        try {
            await PostService.addPost(req.title,req.description,req.img_url,req.user_id)
            res.status(httpStatusCodes.CREATED).send('post created')
        }catch (err) {
            next(err)
        }
    }
    static async removePost(req,res){
        try {
            await PostService.removePost(req.body.id)
            res.status(httpStatusCodes.OK).send(`Post by id ${req.body.id} deleted`)
        }catch (err){
            res.status(httpStatusCodes.SERVER_ERROR).send(err.message)
        }
    }
    static async updatePost(req,res){
        try {
            await PostService.updatePost(req.id,req.title,req.description,req.img_url)
            res.status(httpStatusCodes.OK).send('post updated');
        }catch (err) {
            res.status(httpStatusCodes.SERVER_ERROR).send(err.message)
        }
    }
    // static async getPostByUser(req,res){
    //     const token=req.headers.authorization
    //     const UserId=token.
    // }
}

module.exports = PostController;