import sequelize, { testConnection } from '../config/database';
import User from './User';
import Profile from './Profile';

// Export all models
export { User, Profile };

// Initialize database
export const initDatabase = async (): Promise<void> => {
  try {
    // Test connection
    await testConnection();

    // Sync all models
    // In production, use migrations instead of sync()
    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('✅ Database models synchronized');
    }
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
};

// Close database connection
export const closeDatabase = async (): Promise<void> => {
  await sequelize.close();
  console.log('🔌 Database connection closed');
};

export default {
  User,
  Profile,
  initDatabase,
  closeDatabase,
};
