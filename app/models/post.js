module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('posts', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      }
    });
    
    return Post;
  }