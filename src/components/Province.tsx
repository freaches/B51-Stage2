import { useEffect, useState } from "react";
import axios from "axios";

interface Province {
  id: number;
  name: string;
}

interface OnSelectProvince {
  onSelectProvince: (item: string) => void;
}

function ListGroupProvince({ onSelectProvince }: OnSelectProvince) {
  const [province, setProvince] = useState<Province[] | null>();

  useEffect(() => {
    const url =
      "http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json";
    axios.get<Province[]>(url).then((response) => {
      setProvince(response.data);
    });
  }, []);
  return (
    <div className="card bg-dark m-5">
      <div className="card-body">
        <h5 className="card-title text-light text-start mb-4">
          Pilih Provinsi
        </h5>
        <select
          className="form-select card-body "
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) => onSelectProvince(e.target.value)}
        >
          <option></option>
          {province
            ? province.map((province) => {
                return (
                  <option key={province.name} value={province.id}>
                    {province.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </div>
  );
}

export default ListGroupProvince;
