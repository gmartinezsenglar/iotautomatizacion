import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SensorTable from '@/components/SensorTable';
import useSWR from 'swr';

// Mockear el fetcher de SWR
jest.mock('swr');

describe('SensorTable', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Mensaje de carga', () => {
    useSWR.mockReturnValue({
      data: null,
      error: null,
      mutate: jest.fn(),
      isValidating: false,
    });

    render(<SensorTable />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  it('Error al cargar los datos', () => {
    useSWR.mockReturnValue({
      data: null,
      error: new Error('Error al cargar los datos'),
      mutate: jest.fn(),
      isValidating: false,
    });

    render(<SensorTable />);
    expect(screen.getByText('Error al cargar los datos.')).toBeInTheDocument();
  });

  it('Carga correcta de datos', async () => {
    useSWR.mockReturnValue({
      data: {
        temperatura: 25,
        eco2: 400,
        humedadAire: 60,
        humedadTierra: 30,
        luminosidad: 1000,
      },
      error: null,
      mutate: jest.fn(),
      isValidating: false,
    });

    render(<SensorTable />);

    expect(await screen.findByText('DATOS ACTUALES')).toBeInTheDocument();
    expect(screen.getByText('TEMPERATURA')).toBeInTheDocument();
    expect(screen.getByText('25°C')).toBeInTheDocument();
    expect(screen.getByText('ECO 2')).toBeInTheDocument();
    expect(screen.getByText('400 PPM')).toBeInTheDocument();
    expect(screen.getByText('HUMEDAD AIRE')).toBeInTheDocument();
    expect(screen.getByText('60%')).toBeInTheDocument();
    expect(screen.getByText('HUMEDAD TIERRA')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
    expect(screen.getByText('LUMINOSIDAD')).toBeInTheDocument();
    expect(screen.getByText('1000 Lux')).toBeInTheDocument();
  });

  it('botón de actualizar', async () => {
    const mutate = jest.fn();
    useSWR.mockReturnValue({
      data: {
        temperatura: 25,
        eco2: 400,
        humedadAire: 60,
        humedadTierra: 30,
        luminosidad: 1000,
      },
      error: null,
      mutate,
      isValidating: false,
    });

    render(<SensorTable />);

    const button = screen.getByRole('button', { name: /ACTUALIZAR DATOS/i });
    fireEvent.click(button);
    
    expect(mutate).toHaveBeenCalled();
  });
});
