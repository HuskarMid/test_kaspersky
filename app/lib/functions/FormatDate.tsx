export const FormatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' }).toLowerCase();
    const year = date.getFullYear();
    return (
      <>
        <span>{day}</span> {month} {year}
      </>
    );
};