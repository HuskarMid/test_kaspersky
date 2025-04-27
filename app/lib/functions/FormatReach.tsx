export const FormatReach = (n: number) => {
    const formatNum = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}K` : `0.${n}K `;
    return (
      <>
        <span>{formatNum(n)} </span>
        Reach
      </>
    );
  };