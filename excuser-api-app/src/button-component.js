export const ExcuserButtons = ({getExcuseDetails}) => {
  return (
    <div>
      <div className="first-row">
        <button onClick={() => getExcuseDetails("family")}>Family</button>
        <button onClick={() => getExcuseDetails("office")}>Office</button>
        <button onClick={() => getExcuseDetails("children")}>Children</button>
      </div>
      <div className="second-row">
        <button onClick={() => getExcuseDetails("college")}>College</button>
        <button onClick={() => getExcuseDetails("party")}>Party</button>
        <button onClick={() => getExcuseDetails("funny")}>Funny</button>
      </div>
      <div className="third-row">
        <button onClick={() => getExcuseDetails("unbeliveable")}>Unbeliveable</button>
        <button onClick={() => getExcuseDetails("developers")}>Developers</button>
        <button onClick={() => getExcuseDetails("gaming")}>Gaming</button>
      </div>
    </div>
  );
};
