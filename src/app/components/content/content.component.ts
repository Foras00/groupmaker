import { Component, OnInit } from '@angular/core';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource } from '@angular/material/tree';


interface MemberNode {
  name?:string;
  children?: MemberNode[];
}

const TREE_DATA: MemberNode[] = [
  {
name: "Group 1",
children: [
  {
  name: "Juan De La Cruz"
  },
  {
    name: "John John"
  }
]
},
  {
name: "Group 2",
children: [
  {
  name: "Juan De La Cruz"
  },
  {
    name: "John John"
  }
]
}
];


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  nestedTreeDataSource = new MatTreeNestedDataSource<MemberNode>();
  nestedTreeControl = new NestedTreeControl<MemberNode>(node => node.children);
  constructor() { }

  ngOnInit(): void {
    this.nestedTreeDataSource.data = TREE_DATA;
  }
  
  hasChild = (_: number, node: MemberNode) => !!node.children && node.children.length > 0;
  }

