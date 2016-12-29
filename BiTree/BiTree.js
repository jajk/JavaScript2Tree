function TreeNode(){
	this.data = null;
	this.lchild = null;
	this.rchild = null;				
};
//creating a tree by preOrder.
TreeNode.createBiTree = function(nodeList){
	var i = 0;
	return (function getNode(){
		var node = null,
			val = nodeList[i++];
		if(!val){
			node = null;
		}else{
			node = new TreeNode();
			node.data = val;
			node.lchild = getNode();
			node.rchild = getNode();
		}
		return node;
	})();
};
TreeNode.prototype = {
	constructor: TreeNode,
	_PreOrderTraverse: function(node){
		if(node){
			console.log(node.data);
			this._PreOrderTraverse(node.lchild);
			this._PreOrderTraverse(node.rchild);
		}
	},
	PreOrderTraverse: function(){
		console.log('PreOrder:');
		this._PreOrderTraverse(this);
	},
	_InOrderTraverse: function(node){
		if(node){
			this._InOrderTraverse(node.lchild);
			console.log(node.data);
			this._InOrderTraverse(node.rchild);
		}
	},
	InOrderTraverse: function(){
		console.log('InOrder:');
		this._InOrderTraverse(this);
	},
	_PostOrderTraverse: function(node){
		if(node){
			this._PostOrderTraverse(node.lchild);
			this._PostOrderTraverse(node.rchild);
			console.log(node.data);
		}
	},
	PostOrderTraverse: function(){
		console.log('PostOrder:');
		this._PostOrderTraverse(this);
	}
};