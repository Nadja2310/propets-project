import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLostRecords } from "../../store/actions/act_lostRecords";
import LostRecordCard from "./LostRecordCard";
import NavBar from "../NavBar";
import UserBar from "../UserBar";

const LostRecords = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLostRecords());
  }, []);

  const allLostRecords = useSelector((state) => state.lostRecords.list);
  console.log(allLostRecords);
  const renderLostRecords = () => {
    if (!allLostRecords.length) {
      return <h2>Nobody is lost</h2>;
    }

    return (
      <div className="home-page__row cards">
        {allLostRecords.map((record) => (
          <LostRecordCard key={record.id} record={record} />
        ))}
      </div>
    );
  };

  return (
    <main className="page home-page">
      <NavBar />
      <section className="home-page__content">
        <div className="home-page__container">
          <h2 className="home-page__title">Lost pets</h2>
          <div className="home-page__info-link info-link">
            Would you like to publish a post? <a href="#">join</a> to our
            community!
          </div>
          <div >
           {renderLostRecords()}
          </div>
        </div>
      </section>
      <UserBar />
    </main>
  );
};

export default LostRecords;
