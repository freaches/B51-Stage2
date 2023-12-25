import { useEffect, useState } from "react";
import axios from "axios";

interface SubDistrict {
  id: number;
  district_id: number;
  name: string;
}

interface SelectSubDistrict {
  district_id?: string | null;
}

function ListGroupSubDistrict({ district_id }: SelectSubDistrict) {
  const [subDistrict, setSubDistrict] = useState<SubDistrict[] | null>();

  useEffect(() => {
    const url = `http://www.emsifa.com/api-wilayah-indonesia/api/villages/${district_id}.json`;
    axios.get<SubDistrict[]>(url).then((response) => {
      setSubDistrict(response.data);
    });
  }, [district_id]);
  return (
    <div className="card bg-dark m-5">
      <div className="card-body">
        <h5 className="card-title text-light text-start mb-4">
          Pilih Kelurahan/Desa
        </h5>
        <select
          className="form-select card-body "
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option></option>
          {subDistrict
            ? subDistrict.map((subDistrict) => {
                return (
                  <option key={subDistrict.name} value={subDistrict.id}>
                    {subDistrict.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </div>
  );
}

export default ListGroupSubDistrict;
