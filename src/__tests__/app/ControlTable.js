import { render, screen, fireEvent } from "@testing-library/react";
import ControlTable from "@/components/ControlTable";

describe("ControlTable tests", () => {
  
  // Mock para la función fetch
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test("Cambiar valor de Luz y llamada a la API", () => {
    render(<ControlTable />);
    
    const lightSlider = screen.getByRole("slider", { name: /Luz/i });

    fireEvent.change(lightSlider, { target: { value: 70 } });

    expect(lightSlider.value).toBe("70");

    expect(fetch).toHaveBeenCalledWith("/api/monitoreo", expect.anything());
  });

  test("Cambiar valor del Ventilador 1 y llamada a la API", () => {
    render(<ControlTable />);
    
    const fan1Slider = screen.getByRole("slider", { name: /Ventilador 1/i });

    fireEvent.change(fan1Slider, { target: { value: 60 } });

    expect(fan1Slider.value).toBe("60");

    expect(fetch).toHaveBeenCalledWith("/api/monitoreo", expect.anything());
  });

  test("Cambiar valor del Ventilador 2 y llamada a la API", () => {
    render(<ControlTable />);
    
    const fan2Slider = screen.getByRole("slider", { name: /Ventilador 2/i });

    fireEvent.change(fan2Slider, { target: { value: 80 } });

    expect(fan2Slider.value).toBe("80");

    expect(fetch).toHaveBeenCalledWith("/api/monitoreo", expect.anything());
  });
});
