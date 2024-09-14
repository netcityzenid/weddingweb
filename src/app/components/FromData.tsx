import { useState, useEffect, FormEvent } from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale"; // Import locale Indonesia
import Image from "next/image";
import border from "../../../public/images/border.png";

interface FormData {
  _id: string;
  name: string;
  comment: string;
  attendance: boolean;
  createdAt: string;
}

const COLORS = [
  "#d6b064", // Coral
  "#6B5B95", // Purple
  "#88B04B", // Green
  "#F7CAC9", // Pink
  "#92A8D1", // Blue
  "#F5BE42", // Yellow
  "#6B8E23", // Olive
  "#D2691E", // Chocolate
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

export default function Home() {
  const [formData, setFormData] = useState({ name: "", comment: "", attendance: "" });
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/submit");
    const data: FormData[] = await res.json();
    setSubmittedData(data);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ name: "", comment: "", attendance: "" });
      fetchData();
    }
  };

  return (
    <div>
      <form className="text-sm" onSubmit={handleSubmit}>
        <div className="w-full ">
          <div className="mb-2">
            <input
              className="py-2 rounded px-2 w-full border shadow-sm border-transparent focus:border-[#d6b064] focus:outline-none"
              type="text"
              placeholder="Nama"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-0.5">
            <textarea
              className="py-2 px-2 w-full min-h-20 shadow-sm border border-transparent rounded focus:border-[#d6b064] focus:outline-none"
              placeholder="Ucapan"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              required
            />
          </div>
          <div className=" w-full min-h-8 shadow-sm bg-white rounded">
            <select
              className="w-full py-2 px-2 h-max border border-transparent focus:border-[#d6b064] focus:outline-none rounded"
              value={formData.attendance}
              onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              required
            >
              <option className="" value="" disabled>
                Konfirmasi Kehadiran
              </option>
              <option value="true">Hadir</option>
              <option value="false">Tidak Hadir</option>
            </select>
          </div>
        </div>
        <button className="py-2 px-6 bg-[#d6b064] w-full mt-4 rounded-md text-white font-semibold" type="submit">
          Kirim Ucapan
        </button>
      </form>
      <div className="mt-10 py-5 whitespace-nowrap overflow-y-auto max-h-96 relative">
        <ul className="text-black">
          {submittedData.map((data) => (
            <div className="pb-20 ">
              <li className="border border-[#d6b064] bg-[#] h-max rounded-lg shadow-sm mb-2 p-2 px-4 text-[#0a0a0a] chamfer flex gap-2" key={data._id}>
                <div className="mt-1 border bg-white h-[29px] w-8 font-bold text-white  uppercase text-center items-center flex justify-center rounded-full">
                  <div className="text-[#d6b064]">{data.name.slice(0, 1)}</div>
                  <Image src={border} alt="" className=" absolute h-[29px] w-8"></Image>
                </div>
                <div className="w-full">
                  <div className="flex gap-1 items-center">
                    <div className="font-bold text-black/70">{data.name}</div>
                    <div className="text-xs">
                      {data.attendance ? (
                        <div>
                          <svg className="h-4 w-auto" fill="#d6b064" width="64px" height="64px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                              <path d="M 23.6641 52.3985 C 26.6172 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6172 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6172 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6172 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 24.0391 39.7891 C 23.3126 39.7891 22.8438 39.5547 22.4923 39.1563 L 14.6641 30.4609 C 14.3360 30.0860 14.1485 29.6172 14.1485 29.125 C 14.1485 28.0234 14.9923 27.2031 16.1876 27.2031 C 16.8204 27.2031 17.2891 27.4141 17.7110 27.8594 L 23.9219 34.7266 L 35.9923 17.7344 C 36.4610 17.0547 36.9297 16.7734 37.7501 16.7734 C 38.8985 16.7734 39.7188 17.6172 39.7188 18.7188 C 39.7188 19.1172 39.5547 19.5860 39.2969 19.9609 L 25.6328 39.0625 C 25.2813 39.5078 24.7423 39.7891 24.0391 39.7891 Z"></path>
                            </g>
                          </svg>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-black/70 whitespace-normal">{data.comment}</div>
                  <div className="text-xs text-black/40 mt-2 flex justify-end">{formatDistanceToNow(new Date(data.createdAt), { addSuffix: true, locale: id })}</div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
