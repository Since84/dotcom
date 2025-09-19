describe('health placeholder', () => {
  it('returns ok status (placeholder until supertest configured)', () => {
    const result = { status: 'ok' };
    expect(result.status).toBe('ok');
  });
});
