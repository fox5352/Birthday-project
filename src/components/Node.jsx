
const style = StyleSheet.create({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '40px',
  minHeight: '40px',
  borderRadius: '50%',
  backgroundColor: '#00ced1',
  color: 'white',
})

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Node({fromPos, pos, ...children}){
  return (
    <div className={style}>
    </div>
  )
}