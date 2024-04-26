import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listRequest } from "../slices/listSlice";
import { setNavigate } from "../slices/errorSlice";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function List() {
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRequest());
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(setNavigate("/"));
      navigate("/error");
    }
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <ul className="list-container">
          {items.map((o) => (
            <Link key={o.id} to={`/${o.id}/details`} className="list">
              <span className="text">{o.name}</span>
              <span className="comments">{o.price}</span>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
