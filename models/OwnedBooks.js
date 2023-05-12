const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class OwnedBooks extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

OwnedBooks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    owned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    book_id: {
        type: DataTypes.STRING,
        references: {
            model: "book",
            key: "id"
        }
    },
    genre_id: {
        type: DataTypes.STRING,
        references: {
            model: "genre",
            key: "id"
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'owned_books',
  }
);

module.exports = OwnedBooks;