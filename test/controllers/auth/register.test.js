const { Request, Response, NextFunction } = require('express');
const register = require('../../../src/api/v1/auth/controllers/register');
const authService = require('../../../src/lib/auth');
const app = require('../../../src/app');

describe('Register controller', () => {
  it('should register a new user and return an access token with status 201', async () => {
    const requestBody = {
      name: 'Test User',
      email: 'test@gmail.com',
      password: 'pass123',
    };

    // Mock authService.register to return a user object
    const mockRegister = jest.spyOn(authService, 'register');
    mockRegister.mockResolvedValue({
      id: requestBody.id,
      name: requestBody.name,
      email: requestBody.email,
      role: requestBody.role,
    });
  });
});
