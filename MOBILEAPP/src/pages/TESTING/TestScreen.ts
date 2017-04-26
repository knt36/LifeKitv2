/**
 * Created by roy_f on 4/26/2017.
 */
import {Component} from "@angular/core";
import {TestSuite} from "./Test";
@Component({
  templateUrl:'TestScreen.html'
})

export class TestScreen{
  public testSuite:TestSuite = new TestSuite("Test Suite Test");
  constructor(){
    //Add the test you want here with the template for how to make a test in the test class
    this.testSuite.addTest("The Test Class To Default Succeed",new Promise((resolve, reject)=>{
      resolve();
    }));

    this.testSuite.addTest("The Test Class To Default Fail", new Promise((resolve,reject)=>{
      reject();
    }));

    this.testSuite.runAllTest();
  }
}
