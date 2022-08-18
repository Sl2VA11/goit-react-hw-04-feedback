import propTypes from 'prop-types'

export default function Section({ title, children }) {
   console.log(typeof children);
   return ( 
      <>
         <h1>{title}</h1>
         <div>
         {children}
         </div>
      </>
   )
}

Section.propTypes = {
  title: propTypes.string,
 
};
