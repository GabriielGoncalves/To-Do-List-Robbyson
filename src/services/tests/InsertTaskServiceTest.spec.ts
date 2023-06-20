import { InsertTaskService } from '../InsertTaskService';

describe('TaskService', () => {
    it('should insert one task', async () => {
        const mockDb = {
            register: jest.fn().mockResolvedValue({
                id: '123',
                description: 'descricao da task',
                date: `${new Date()}`,
                hide: false,
                done: false,
            }),
        };

        const taskService = new InsertTaskService(mockDb);

        const result = await taskService.insert({
            description: 'descricao da task',
        } as any);

        expect(mockDb.register).toHaveBeenCalledWith({
            description: 'descricao da task',
        });

        expect(result).toEqual({
            id: '123',
            description: 'descricao da task',
            date: `${new Date()}`,
            hide: false,
            done: false,
        });
    });
});
