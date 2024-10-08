function Avatar({ ...props }) {
  const { person, size, age, edu } = props;
  return (
    <div>
      <p>Name: {person.name}</p> {/* Accessing name from person */}
      <p>Image ID: {person.imageId}</p> {/* Accessing imageId from person */}
      <p>Size: {size}px</p> {/* Accessing size directly */}
      <p>Age: {age}</p> {/* Optional: access age if needed */}
      <p>Education: {edu}</p> {/* Optional: access education if needed */}
    </div>
  );
}

export default Avatar;
