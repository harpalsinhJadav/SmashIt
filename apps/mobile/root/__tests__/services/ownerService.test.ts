import { ownerService } from '../../../src/services/ownerService';

describe('ownerService', () => {
  it('getDashboardStats returns mock data', async () => {
    const data: any = await ownerService.getDashboardStats();
    expect(data.stats).toBeDefined();
    expect(data.stats.length).toBe(4);
    expect(data.recentBookings).toBeDefined();
    expect(data.myCourts).toBeDefined();
  });

  it('getMyCourts returns array of courts', async () => {
    const data: any = await ownerService.getMyCourts();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(3);
    expect(data[0].name).toBe('Arena Sports Complex');
  });

  it('getOwnerCourtDetail returns court with slots and assistants', async () => {
    const data: any = await ownerService.getOwnerCourtDetail(1);
    expect(data.id).toBe(1);
    expect(data.slots).toBeDefined();
    expect(data.assistants).toBeDefined();
  });

  it('getOwnerSales returns stats and chart data', async () => {
    const data: any = await ownerService.getOwnerSales('month');
    expect(data.stats).toBeDefined();
    expect(data.chartData).toBeDefined();
    expect(data.courtWiseSales).toBeDefined();
  });

  it('getOwnerProfile returns profile data', async () => {
    const data: any = await ownerService.getOwnerProfile();
    expect(data.name).toBe('Amit Verma');
    expect(data.email).toBe('amit.verma@example.com');
    expect(data.stats).toBeDefined();
  });
});
