import { useEffect, useState } from "react";
import axios from "axios";

interface District {
  id: number;
  regency_id: number;
  name: string;
}

interface SelectDistrict {
  regency_id?: string | null;
  onSelectDistrict: (item: string) => void;
}

function ListGroupDistrict({ regency_id, onSelectDistrict }: SelectDistrict) {
  const [district, setDistrict] = useState<District[] | null>();

  useEffect(() => {
    const url = `http://www.emsifa.com/api-wilayah-indonesia/api/districts/${regency_id}.json`;
    axios.get<District[]>(url).then((response) => {
      setDistrict(response.data);
    });
  }, [regency_id]);
  return (
    <div className="card bg-dark m-5">
      <div className="card-body">
        <h5 className="card-title text-light text-start mb-4">
          Pilih Kecamatan
        </h5>
        <select
          className="form-select card-body "
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={(e) => onSelectDistrict(e.target.value)}
        >
          <option></option>
          {district
            ? district.map((district) => {
                return (
                  <option key={district.name} value={district.id}>
                    {district.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </div>
  );
}

export default ListGroupDistrict;
