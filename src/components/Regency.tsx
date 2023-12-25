import { useEffect, useState } from "react";
import axios from "axios";

interface Regency {
  id: number;
  province_id: number;
  name: string;
}

interface SelectRegency {
  province_id?: string | null;
  onSelectRegency: (item: string) => void;
}

function ListGroupRegency({ province_id, onSelectRegency }: SelectRegency) {
  const [regency, setRegency] = useState<Regency[] | null>();

  useEffect(() => {
    const url = `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${province_id}.json`;
    axios.get<Regency[]>(url).then((response) => {
      setRegency(response.data);
    });
  }, [province_id]);
  return (
    <div className="card bg-dark m-5">
      <div className="card-body">
        <h5 className="card-title text-light text-start mb-4">
          Pilih Kota/Kabupaten
        </h5>
        <select
          className="form-select card-body "
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) => onSelectRegency(e.target.value)}
        >
          <option></option>
          {regency
            ? regency.map((regency) => {
                return (
                  <option key={regency.name} value={regency.id}>
                    {regency.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </div>
  );
}

export default ListGroupRegency;
