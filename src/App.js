import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Parent from './Method_As_Props/ParentComponent';
import ParentComponent from './Method_As_Props/ParentComponent';
import ConditionalRendering from './ConditionalRendering';
import ListRendering from './ListRendering';
import StyleSheet from './Style/StyleSheet';
import Inline from './Style/Inline';
import './Style/appStyle.css'
import styles from './Style/appStyle.module.css';
import FormClass from './Form/FormClass';
import ReactFragment from './ReactFragment';
import ParentComp from './PureComponent/ParentComp';
import RefsDemo from './RefsDemo';
import FRParent from './ForwardRefs/FRParent';
import Hero from './ErrorBoundary/Hero';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import HoverCounter from './HigherOrderComponent/HoverCounter';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import PropsRender from './ErrorBoundary/PropsRender';
import ClickCouner2 from './HigherOrderComponent/ClickCouner2';
import ComponentC from './Context/ComponentC';
import { UserProvider } from './Context/userContext';
import FarmerList from './http-response/FarmerList';
import Counting from './Hooks/PrevStateEx';
import ObjectMergeEx from './Hooks/ObjectMergeEx';
import UseStateArray from './Hooks/UseStateArray';
import MousePointer from './Hooks/MousePointer';
import AutoCount from './Hooks/AutoCount';
import UseReducerEx from './Hooks/UseReducerEx';
import UseReducerEx2 from './Hooks/UseReducerEx2';
import UseReducerEx3 from './Hooks/UseReducerEx3';

function App() {
  return (
    <div className="App">
      <UseReducerEx3/>
      {/* <AutoCount/> */}
      {/* <MousePointer/> */}
      {/* <UseStateArray/> */}
      {/* <ObjectMergeEx/> */}
      {/* <Counting/> */}





      {/* <FarmerList/> */}
       {/* <ErrorBoundary>
      <HoverCounter name="Samrat"/>
      </ErrorBoundary>
      <ClickCounter/> */}
      {/* <PropsRender render={(count, increment) => (
      <ClickCouner2 count={count} increment={increment} />)}
      />

      <UserProvider value="Samrat">
      <ComponentC/>
      </UserProvider> */}
      <ParentComp/>
      {/* <RefsDemo/> */}
     
      {/* <FRParent/>
      
      <ErrorBoundary>
      <Hero heroname={'Batman'}/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname={'Joker'}/>
      </ErrorBoundary> */}

      {/* <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2> 
      <FormClass/>
      <ReactFragment/>

     <Counter num="2"/>
     <br />
     <ParentComponent/>
     <ConditionalRendering/>
     <ListRendering/>
     <StyleSheet primary={true}/>
     <Inline/> */}
    </div>
  );
}

export default App;
