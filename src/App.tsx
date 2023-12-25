import React , { useState } from "react";
import ListGroupProvince from "./components/Province";
import ListGroupRegency from "./components/Regency";
import ListGroupDistrict from "./components/District";
import ListGroupSubDistrict from "./components/Sub-District";
import "./App.css";

const App: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedRegency, setSelectedRegency] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const handleChangeProvince = (province: string | null) => {
    setSelectedProvince(province);
    setSelectedRegency(null);
    setSelectedDistrict(null);
  };
  const handleChangeRegency = (regency: string | null) => {
    setSelectedRegency(regency);
    setSelectedDistrict(null);
  };
  const handleChangeDistrict = (district: string | null) => {
    setSelectedDistrict(district);
  };
  return (
    <div className="container mt-5 bs-secondary-color">
      <div className="container-sm mb-5 text-start">
        <h3 className="fw-bold mb-3 text-secondary">API STATIS</h3>
        <h2 className="text-info-emphasis">DATA WILAYAH INDONESIA</h2>
        <p className="text-wrap">
          Tugas B51 untuk Frontend menggunakan Vite + Typescipt dengan metode
          'Axios', 'useState', dan 'useEffect'
        </p>
      </div>
      <ListGroupProvince
        onSelectProvince={handleChangeProvince}
      ></ListGroupProvince>
      {selectedProvince && (
        <ListGroupRegency
          onSelectRegency={handleChangeRegency}
          province_id={selectedProvince}
        />
      )}
      {selectedRegency && (
        <ListGroupDistrict
          onSelectDistrict={handleChangeDistrict}
          regency_id={selectedRegency}
        />
      )}
      {selectedDistrict && (
        <ListGroupSubDistrict district_id={selectedDistrict} />
      )}
    </div>
  );
};

export default App;
