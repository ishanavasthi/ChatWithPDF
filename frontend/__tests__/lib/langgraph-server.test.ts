
import { Client } from '@langchain/langgraph-sdk';

// Mock the dependencies
jest.mock('@langchain/langgraph-sdk', () => {
  return {
    Client: jest.fn().mockImplementation(() => ({
      threads: {
        create: jest.fn(),
      },
    })),
  };
});

jest.mock('../../lib/langgraph-base', () => {
  return {
    LangGraphBase: jest.fn(),
  };
});

describe('langgraph-server', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    process.env.NEXT_PUBLIC_LANGGRAPH_API_URL = 'http://localhost:2024';
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('should throw if NEXT_PUBLIC_LANGGRAPH_API_URL is missing', () => {
    delete process.env.NEXT_PUBLIC_LANGGRAPH_API_URL;

    expect(() => {
      jest.isolateModules(() => {
        require('../../lib/langgraph-server');
      });
    }).toThrow('NEXT_PUBLIC_LANGGRAPH_API_URL is not set');
  });

  it('should initialize without LANGCHAIN_API_KEY', () => {
    delete process.env.LANGCHAIN_API_KEY;

    expect(() => {
      jest.isolateModules(() => {
        require('../../lib/langgraph-server');
      });
    }).not.toThrow();
  });

  it('should initialize with LANGCHAIN_API_KEY if provided', () => {
    process.env.LANGCHAIN_API_KEY = 'test-key';

    expect(() => {
      jest.isolateModules(() => {
        require('../../lib/langgraph-server');
      });
    }).not.toThrow();
  });

  it('should pass API key to Client if provided', () => {
    process.env.LANGCHAIN_API_KEY = 'test-key';

    let ClientMock;
    jest.isolateModules(() => {
      require('../../lib/langgraph-server');
      ClientMock = require('@langchain/langgraph-sdk').Client;
    });

    expect(ClientMock).toHaveBeenCalledWith(
      expect.objectContaining({
        defaultHeaders: expect.objectContaining({
          'X-Api-Key': 'test-key',
        }),
      })
    );
  });

  it('should not pass X-Api-Key header if LANGCHAIN_API_KEY is missing', () => {
    delete process.env.LANGCHAIN_API_KEY;

    let ClientMock;
    jest.isolateModules(() => {
      require('../../lib/langgraph-server');
      ClientMock = require('@langchain/langgraph-sdk').Client;
    });

    expect(ClientMock).toHaveBeenCalledWith(
      expect.objectContaining({
        defaultHeaders: expect.not.objectContaining({
          'X-Api-Key': expect.anything(),
        }),
      })
    );
  });
});
