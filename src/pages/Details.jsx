import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detailsRequest } from "../slices/detailsSlice";
import { setNavigate } from "../slices/errorSlice";
import Loader from "../components/Loader";
import Error from "../pages/Error";
export default function Details() {
  const itemId = Number(useParams().id);
  const navigate = useNavigate();
  const { item, loading, error } = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsRequest(itemId));
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(setNavigate(`/${itemId}/details`));
      navigate("/error");
    }
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <ul className="details">
          <li className="details-name">Наменование: {item.name}</li>
          <li className="details-price">Цена: {item.price}</li>
          <li className="details-content">* {item.content}</li>
        </ul>
      )}
    </>
  );
}
