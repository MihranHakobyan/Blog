const Post = require('../models/post');

class PostService {
    static async getAllPosts() {
        return Post.findAll();
    }

    // static async getByUserId(UserId) {
    //     return Post.findAll({
    //         where: {id: UserId}
    //     });
    // }

    static async addPost(title, description, img_url, user_id) {
        return Post.create({title, description, img_url, user_id});
    }

    static async removePost(PostId) {
        Post.destroy({where: {id: PostId}});
    }

    static async updatePost(PostId, title, description, img_url) {
        Post.update({title, description, img_url}, {returning: true, where: {id: PostId}});
    }
}

module.exports = PostService;