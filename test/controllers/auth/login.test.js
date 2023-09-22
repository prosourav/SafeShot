const authService = require('../../../src/lib/auth');

describe('Register controller', () => {
  it('should login user and return an access token with status 201', async () => {
    const requestBody = {
      email: 'test@gmail.com',
      password: 'pass123',
    };

    // Mock authService.register to return a user object
    const mockRegister = jest.spyOn(authService, 'login');
    mockRegister.mockResolvedValue({
      email: requestBody.email,
      role: requestBody.role,
    });
  });
});
