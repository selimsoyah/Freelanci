import { DataTypes, Model, Optional, Op } from 'sequelize';
import sequelize from '../config/database';
import { UserRole, VerificationStatus } from '../types';

// User attributes interface
interface UserAttributes {
  id: string;
  email: string;
  phone?: string;
  password_hash: string;
  role: UserRole;
  google_id?: string;
  tunisian_id?: string;
  verification_status: VerificationStatus;
  created_at: Date;
  updated_at: Date;
}

// Optional fields for creation
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'phone' | 'google_id' | 'tunisian_id' | 'verification_status' | 'created_at' | 'updated_at'> {}

// User model class
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public email!: string;
  public phone?: string;
  public password_hash!: string;
  public role!: UserRole;
  public google_id?: string;
  public tunisian_id?: string;
  public verification_status!: VerificationStatus;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

// Initialize User model
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(UserRole)),
      allowNull: false,
      defaultValue: UserRole.FREELANCER,
    },
    google_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    tunisian_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    verification_status: {
      type: DataTypes.ENUM(...Object.values(VerificationStatus)),
      allowNull: false,
      defaultValue: VerificationStatus.PENDING,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
      {
        unique: true,
        fields: ['phone'],
        where: {
          phone: {
            [Op.ne]: null,
          },
        },
      },
    ],
  }
);

export default User;
