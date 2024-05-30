import {renderHook, act} from '@testing-library/react-hooks';
import useFetch from './useFetch';

global.fetch = jest.fn();

const mockFetch = (data: any, shouldReject = false) => {
  (global.fetch as jest.Mock).mockImplementationOnce(() =>
    shouldReject
      ? Promise.reject(data)
      : Promise.resolve({
          json: () => Promise.resolve(data),
        }),
  );
};

describe('useFetch', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start with default values', () => {
    const {result} = renderHook(() =>
      useFetch('https://reqres.in/api/users?page=2'),
    );

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should fetch data successfully', async () => {
    const mockData = {data: [{id: 1, name: 'John Doe'}]};
    mockFetch(mockData);

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetch('https://reqres.in/api/users?page=2'),
    );

    act(() => {
      result.current.fetchData();
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData.data);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should handle fetch error', async () => {
    const mockError = new Error('Failed to fetch');
    mockFetch(mockError, true);

    const {result, waitForNextUpdate} = renderHook(() =>
      useFetch('https://reqres.in/api/users?page=2'),
    );

    act(() => {
      result.current.fetchData();
    });

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(mockError.message);
  });
});
