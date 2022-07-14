  export function Albums(props) {
    const {albumName} = props;
  return (
    <div className="album">
      <span className="Albums">
        ALBUM: {albumName}
      </span>
    </div>
  );
}

export default Albums;