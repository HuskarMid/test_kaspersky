const RectButton = ({children, onClick}: {children?: React.ReactNode, onClick?: () => void}) => {
  return (
    <button
        style={{
            border: '2px solid #fff',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '18px',
            height: '18px',
            boxSizing: 'border-box',
            cursor: 'pointer',
        }}
        onClick={onClick}>
      {children}
    </button>
  )
}

export default RectButton;
