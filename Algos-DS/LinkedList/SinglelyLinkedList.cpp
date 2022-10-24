#include <iostream>

using namespace std;

struct Node {
    int val;
    Node *next;

    Node() {
        val = 0;
        next = NULL;
    }

    Node(int val) {
        this->val = val;
        this->next = NULL;
    }
};

class LinkedList {
    Node*  head;
public:
    LinkedList() {
        head = NULL;
    }

    bool contains(int);

    void append(int);

    void printList();

    void deleteNode(int);
};

bool LinkedList::contains(int data) {
    Node* curr = head;

    while (curr->next != NULL) {
        if(curr->val == data) {
            return true;
        }
        curr = curr->next;
    }
    return false;
}

void LinkedList::append(int data) {
    Node* newNode = new Node(data);

    if (head == NULL) {
        head = newNode;
        return;
    }

    Node* curr = head;

    while (curr->next != NULL) {
        curr = curr->next;
    }

    curr->next = newNode;
}

void LinkedList::printList() {
    Node* curr = head;

    while (curr->next != NULL) {
        cout << curr->val << " -> ";
        curr = curr->next;
    }
}


int main() {
    LinkedList list;
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.printList();
    cout << "\n" << list.contains(5) << endl;
    cout << list.contains(10) << endl;
    return 0;
}
